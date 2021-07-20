import { render, screen } from "@testing-library/react";
// render함수: 메모리상에 돔을 만들고
// screen함수: 해당 돔에 접근
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);
    // react-testing-library의 render 함수가 반환하는 오브젝트 중 하나인
    // container를 받아서 사용
    // container는 리액트 컴포넌트에서 화면에 표시되는 부분을 담고 있는 오브젝트
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    // 화면에 표시되고 있는 <img />를 클래스명으로 찾아와서
    // 가져온 HTML 요소 한 개가 존재하는지를 toHaveLength 함수로 체크
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );
    // getElementsByClassName함수를 통해 찾고자 하는 이미지가 존재하는지 확인
    // 이미지가 우리가 원하는 이미지를 표지하고 있는지 toHaveAttribute함수를 사용하여
    // <img />태그의 src를 가져와 비교
    expect(container.getElementsByTagName("p")).toHaveLength(1);
    // <p>태그를 찾고 해당 태그가 한 개 존재하고 있음을 toHaveLength 함수를 통해 테스트
    expect(container.getElementsByTagName("P")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload."
    );
    // <p>태그가 우리가 화면에 표시되길 원하는 문자열을 잘 표시하고 있는지
    // toHaveTextContent 함수를 사용하여 테스트
    expect(container).toMatchSnapshot();
    // 스냅샷 테스트
  });
});

// test("renders learn react link", () => {
//   render(<App />);
//   // App이라는 컴포넌트를 렌더링
//   const linkElement = screen.getByText(/learn react/i);
//   // screen.getByText를 통해 'learn react'라는 글자를 가지고 있는
//   // 돔 요소(DOM Element)를 찾고
//   expect(linkElement).toBeInTheDocument();
//   // 찾은 요소를 Jest의 expect().toBeInTheDocument()를 사용하여
//   // 돔에 표시되어 있는지 확인
// });
