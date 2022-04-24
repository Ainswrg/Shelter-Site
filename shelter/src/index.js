import 'normalize.css';
import './index.scss';
import './pages/main/index';
import pets from './pages/pets/index';
import { menu, onOverlayClick } from './pages/main/index';

pets();
menu();
onOverlayClick();
