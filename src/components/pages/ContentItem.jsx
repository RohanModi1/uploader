export default function ContentItem() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        
      ];
    return (
        
        <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Mapping through items and rendering them */}
        {items.map(item => (
          <div key={item.id} className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">{item.name}</h2>
            {/* You can add more details or components for each item here */}
          </div>
        ))}
      </div>
    </div>
    )
}