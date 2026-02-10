interface AdminNavProps {
  currentPage: 'dashboard' | 'enquiries' | 'items' | 'categories';
}

export default function AdminNav({ currentPage }: AdminNavProps) {
  const navItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
    { key: 'enquiries', label: 'Enquiries', href: '/admin/enquiries' },
    { key: 'items', label: 'Items', href: '/admin/items' },
    { key: 'categories', label: 'Categories', href: '/admin/categories' },
  ] as const;

  return (
    <nav
      className="
        w-full
        overflow-x-auto
        scrollbar-hide
      "
    >
      <div
        className="
          flex
          gap-3
          md:gap-4
          w-max
          mx-auto
          px-1
        "
      >
        {navItems.map((item) => {
          const isActive = currentPage === item.key;

          return (
            <a
              key={item.key}
              href={item.href}
              className={`
                whitespace-nowrap
                px-5 py-2.5
                rounded-xl
                font-semibold
                text-sm
                transition-all
                duration-300
                ${isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                  : 'bg-white text-foreground/60 hover:bg-pink-50 hover:text-primary border border-foreground/5'
                }
              `}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
