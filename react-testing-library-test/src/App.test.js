import { render, screen } from "@testing-library/react";
// render함수: 메모리상에 돔을 만들고
// screen함수: 해당 돔에 접근
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // App이라는 컴포넌트를 렌더링
  const linkElement = screen.getByText(/learn react/i);
  // screen.getByText를 통해 'learn react'라는 글자를 가지고 있는
  // 돔 요소(DOM Element)를 찾고
  expect(linkElement).toBeInTheDocument();
  // 찾은 요소를 Jest의 expect().toBeInTheDocument()를 사용하여
  // 돔에 표시되어 있는지 확인
});
