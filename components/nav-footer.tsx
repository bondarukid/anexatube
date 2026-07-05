import {
  demoFooterCopyright,
  demoFooterLinks,
} from "@/lib/demo-data"

export function NavFooter() {
  return (
    <div className="px-4 pb-4 pt-1">
      {demoFooterLinks.map((row, index) => (
        <div
          key={index}
          className="mb-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground"
        >
          {row.map((label) => (
            <a
              key={label}
              href="#"
              className="hover:text-sidebar-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      ))}
      <p className="text-xs text-muted-foreground">{demoFooterCopyright}</p>
    </div>
  )
}
