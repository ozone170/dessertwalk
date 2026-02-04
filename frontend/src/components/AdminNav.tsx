interface AdminNavProps {
  currentPage: 'dashboard' | 'enquiries' | 'items' | 'categories';
}

export default function AdminNav({ currentPage }: AdminNavProps) {
  const navItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
    { key: 'enquiries', label: 'Enquiries', href: '/admin/enquiries' },
    { key: 'items', label: 'Items', href: '/admin/items' },
    { key: 'categories', label: 'Categories', href: '/admin/categories' }
  ];

  return (
    <nav className="flex space-x-4">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === item.key
              ? 'bg-pink-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}