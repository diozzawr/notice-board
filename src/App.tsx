import { useEffect, useState } from 'react';

// Описываем структуру данных, которую возвращает JSONPlaceholder
interface Notice {
  id: number;
  title: string;
  body: string; // В этом API поле с текстом называется "body"
}

function App() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Публичный тестовый API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке данных:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Загрузка объявлений...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Доска объявлений</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id} style={{ marginBottom: '15px' }}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;