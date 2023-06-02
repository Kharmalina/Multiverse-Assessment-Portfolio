/** @jest-environment jsdom */
import React from 'react';

// import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App.jsx';
import { Hangouts } from './components/Hangouts.jsx';
import { CreateHangout} from './components/CreateHangout.jsx';
import { Community } from './components/Community.jsx';
import { Profile } from './components/Profile.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Login } from './components/Login.jsx';
import { Signup } from './components/Signup.jsx';
import { ThemeSwitcher } from './components/ThemeSwitcher.jsx';




/**
 * Verify something should render
 */
test('Community should render', () => {
  render(<Community />);

  expect(screen.getByText('Community')).toBeInTheDocument();
});

// test('Button should render', () => {
//   // TODO: change the expect to actually test something 😉
// //   expect('no test written').toBe('tested');
// // });
//   render(<App />);
//   const themeButton = screen.getByText('Current theme: light')
//   expect(themeButton).toBeInTheDocument();
// }); 

// /**
//  * Verify clicking button should change theme
//  * hint: use fireEvent.click(element) to trigger a click event on an element
//  */
// test('theme button should update button text', () => {
//   // TODO: change the expect to actually test something 😉
// //   expect('no test written').toBe('tested');
// // });
//   render(<App />);
//   const themeButton = screen.getByText('Current theme: light')
//   fireEvent.click(themeButton)
//   const changedButton = screen.getByText('Current theme: dark')
//   expect(changedButton).toBeInTheDocument();
// });

// // BONUS
// // hint: there is a `.toHaveStyle` method.
// // e.g.: expect(element).toHaveStyle('color: #FFF');
// test('theme button should toggle styles', () => {
//   // TODO: change the expect to actually test something 😉
// //   expect('no test written').toBe('tested');
// // });
//   render(<App />);
//   const themeButton = screen.getByText('Current theme: light')
//   fireEvent.click(themeButton)
//   expect(document.body).toHaveStyle('background-color: rgb(51,51,51)')
// });

// /**
//  * Verify clicking button should toggle hidden content
//  *
//  * hint: you can check if something does not exist by using .not
//  * e.g. expect(element).not.toBeInTheDocument()
//  *
//  * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
//  * (getByText will throw an error if it is not rendered)
//  */
// test('hidden button should toggle hidden content', () => {
//   // TODO: change the expect to actually test something 😉
// //   expect('no test written').toBe('tested');
// // });
//     render(<App />);
//   let hiddenText = screen.queryByText("this content is hidden by default")
//   expect(hiddenText).not.toBeInTheDocument()
//   const toggleButton = screen.getByText('Show hidden content')
//   fireEvent.click(toggleButton)
//   hiddenText = screen.queryByText("this content is hidden by default")
//   expect(hiddenText).toBeInTheDocument
// });


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */