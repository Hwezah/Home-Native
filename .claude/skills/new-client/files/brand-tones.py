# Usage: python3 brand-tones.py /home/user/<client>
# Swaps the template's fixed HomeNative browns (text on dark sections, icon boxes, photo placeholders, photo tints,
# cursor glow) for tones derived from the client's brand colour, so the whole site matches their logo.
# Run on client copies only — never on Home-Native itself.
import re
import sys
from pathlib import Path

root = Path(sys.argv[1])

layout = root / "app/layout.tsx"
s = layout.read_text()
marker = "--on-photo:${c.onPhoto}}"
if "--on-brand:" not in s:
    assert marker in s, "layout brandCss changed — update brand-tones.py"
    s = s.replace(
        marker,
        "--on-photo:${c.onPhoto};"
        "--on-brand:color-mix(in srgb,#fff 90%,var(--brand));"
        "--on-brand-muted:color-mix(in srgb,#fff 72%,var(--brand));"
        "--brand-raised:color-mix(in srgb,#fff 12%,var(--brand));"
        # highlighted words on dark sections and photos: the client's light accent instead of the template's lemon
        "--yellow:${c.onPhoto}}",
    )
    layout.write_text(s)

# Every warm/tinted neutral from HomeNative (dark-theme surfaces, light section tints, photo placeholders, service tags,
# the "sand" highlight) is re-derived from the client's brand colours. `html:` beats globals.css on specificity.
tones = (
    "html:root{"
    "--sand:var(--brand-mid);--sand-tint:var(--brand-tint);"
    "--surface-warm:color-mix(in srgb,var(--brand) 3%,#fff);"
    "--surface-warm-2:color-mix(in srgb,var(--brand) 6%,#fff);"
    "--surface-warm-3:color-mix(in srgb,var(--brand) 4%,#fff);"
    "--img-bg:color-mix(in srgb,var(--brand) 14%,#fff);"
    "--tag-tint-1:color-mix(in srgb,var(--brand-soft) 30%,#fff);"
    "--tag-tint-2:color-mix(in srgb,var(--brand) 12%,#fff);"
    "--tag-tint-3:color-mix(in srgb,var(--brand-tint) 70%,#fff)}"
    'html:root[data-theme="dark"]{'
    "--paper:color-mix(in srgb,var(--brand) 30%,#0b0b0c);"
    "--ink:color-mix(in srgb,var(--brand) 6%,#f4f4f4);"
    "--muted-1:color-mix(in srgb,var(--brand) 10%,#d2d2d2);"
    "--muted-1b:color-mix(in srgb,var(--brand) 10%,#c4c4c4);"
    "--muted-2:color-mix(in srgb,var(--brand) 12%,#a2a2a2);"
    "--muted-2b:color-mix(in srgb,var(--brand) 12%,#939393);"
    "--line:color-mix(in srgb,var(--brand) 45%,#262626);"
    "--line-strong:color-mix(in srgb,var(--brand) 45%,#363636);"
    "--surface-warm:color-mix(in srgb,var(--brand) 38%,#101011);"
    "--surface-warm-2:color-mix(in srgb,var(--brand) 42%,#121213);"
    "--surface-warm-3:color-mix(in srgb,var(--brand) 40%,#111112);"
    "--img-bg:color-mix(in srgb,var(--brand) 50%,#1c1c1c);"
    "--sand-tint:var(--brand-tint);"
    "--tag-tint-1:color-mix(in srgb,var(--brand-soft) 35%,#1c1c1c);"
    "--tag-tint-2:color-mix(in srgb,var(--brand) 60%,#262626);"
    "--tag-tint-3:color-mix(in srgb,var(--brand-tint) 70%,#1c1c1c)}"
)
s = layout.read_text()
if "html:root{" not in s:
    end = "--brand-soft:${c.dark.soft}}`;"
    assert end in s, "layout brandCss changed — update brand-tones.py"
    s = s.replace(end, "--brand-soft:${c.dark.soft}}` +\n  `" + tones + "`;")
    layout.write_text(s)

def mix(alpha: str) -> str:
    pct = round(float(alpha) * 100)
    return f"color-mix(in_srgb,var(--brand)_{pct}%,transparent)" if pct else "transparent"

swaps = {
    "text-[#D9C7B4]": "text-[var(--on-brand-muted)]",
    "text-[#E3D5C6]": "text-[var(--on-brand-muted)]",
    "text-[#EFE5DA]": "text-[var(--on-brand)]",
    "bg-[#4A3526]": "bg-[var(--brand-raised)]",
}
placeholders = ["#6E675E", "#6A5442", "#4a443c", "#5A4433", "#7A5E45", "#1A1714"]
warm = r"rgba\((?:40,36,30|30,22,15|30,27,22|40,30,20|20,16,12|46,31,18),\s*(\.\d+|0|1)\)"

for path in list(root.glob("app/**/*.tsx")) + list(root.glob("components/**/*.tsx")):
    text = path.read_text()
    new = text
    for a, b in swaps.items():
        new = new.replace(a, b)
    for hexcode in placeholders:
        new = new.replace(f"bg-[{hexcode}]", "bg-[var(--brand)]")
    new = re.sub(warm, lambda m: mix(m.group(1)), new)
    new = new.replace('"rgba(139,94,60,.12)"', '"color-mix(in srgb, var(--brand-mid) 12%, transparent)"')
    if new != text:
        path.write_text(new)
        print("updated", path.relative_to(root))
