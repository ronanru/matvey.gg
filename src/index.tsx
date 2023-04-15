/* @refresh reload */
import '@fontsource/inter/variable.css';
import { render } from 'solid-js/web';
import Background from './background';
import './index.css';

render(
  () => (
    <>
      <Background />
    </>
  ),
  document.getElementById('root')!
);
