import '../src/styles/App.css';
import Button from './components/Button';
import ExpandableCard from './components/ExpandableCard';
import { useTheme } from './context/ThemeContext';
import colorSchemes from './styles/colorSchemes';

function App() {
  const { mode, theme, toggleMode, changeTheme } = useTheme();
  console.log(`Current mode: ${mode}, Current theme: ${theme}`);
  const { background } = colorSchemes[mode][theme];
  return (

      <div className="app" style={{ backgroundColor: background }}>
        <div className="controls">
          <Button type="modeButton" onClick={() => {toggleMode()}}>
            {mode}
          </Button>
          <Button type="themeButton" onClick={() => {changeTheme()}}>
            {theme}
          </Button>
        </div>
        <div className="cards">
          <ExpandableCard
            title="Cool guy"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci, blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet, tempus lectus ac, faucibus quam. Praesent euismod congue cursus. Phasellus tincidunt sem vitae neque egestas, ut egestas justo venenatis."
          />
        </div>
      </div>

  );
}

export default App;
