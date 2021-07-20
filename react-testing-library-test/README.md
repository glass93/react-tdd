# App.test.js 테스트 코드 연습

```javascript
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
```









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
