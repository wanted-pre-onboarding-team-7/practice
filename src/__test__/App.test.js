import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App 컴포넌트 렌더링 테스트', () => {
  test('<App /> 렌더링이 되나요?', async () => {
    render(<App />);

    const headingEl = screen.getByRole('heading', makeOptions(1, 'app'));
    expect(headingEl).toBeInTheDocument();
  });
});

const makeOptions = (level, name) => {
  return { level, name };
};
