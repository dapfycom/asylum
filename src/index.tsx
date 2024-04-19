import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
// @ts-ignore
root.render(<App />);
