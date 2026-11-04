import { useState } from 'react';

interface Notice {
  id: number;
  title: string;
  description: string;
  price: number;
}

function App() {
  const [notices] = useState<Notice[]>([
    { id: 1, title: 'Продам велосипед', description: 'Отличное состояние', price: 5000 },
    { id: 2, title: 'Ремонт ноутбуков', description: 'Быстро и качественно', price: 1000 },
  ]);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📢 Доска объявлений</h1>
      <p style={{ color: 'green' }}>✅ Сайт успешно задеплоен через GitHub Actions!</p>
      
      <div style={{ marginTop: '20px' }}>
        {notices.map((n) => (
          <div key={n.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
            <h3>{n.title}</h3>
            <p>{n.description}</p>
            <strong>{n.price} сом</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;