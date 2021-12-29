import './App.css';
import content from './content/content.json';

function App() {
  return (
    <div>
      <div className='cardWrap'>
          {content.map((item) => (
            <div className='card' key={item.id}>
              <img src={item.image_preview_url} alt="legendImage" width="100%" />
              {item.traits.map((trait) => {
                if (trait.trait_type === "Legend")
                  return <p key={trait.value}>{item.token_id} - {trait.value}</p>;
                return null;
              })}
            </div>)
          )}
        </div>
    </div>
  );
}

export default App;
