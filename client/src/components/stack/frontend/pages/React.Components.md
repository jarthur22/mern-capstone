### React Components and State

React is built with components instead of pages. These components are functions that render JSX, which is Javascript XML that allows us to easily render HTML with Javascript. In order to be dynamic, components use state, which is a set of variables that force the page to be rerendered every time one of them is changed.

#### Components

Components in React take the place of pages, as well as the need for iframes, since React Components can be easily imported and used in other Components. Here is, for example, the component page that you are looking at right now:

```javascript
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Markdown from '../Markdown';
import FrontendSideMenu from './FrontendSideMenu';

const Frontend = () => {
    return (
        <Container style={{padding: '0'}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <FrontendSideMenu/>
                </Col>
                <Col style={{maxHeight: '100vh'}}>
                    <Markdown/>
                </Col>
            </Row>
        </Container>
    )
};

export default Frontend;
```

This is a relatively simple component. Let's break down the things going on here:
- The React library and some Bootstrap elements are imported, as well as the sub-components that are a part of the Frontend component.
- The Frontend Component is defined as a functional component. Components can be defined as functions or classes, but functions are better for fast and high-level React development.
- The Frontend component is composed of a Container, a Row, and two Column elements. This is purely for styling purposes, and these elements are provided by React-Bootstrap-- [learn more about Bootstrap here](/stack/frontend-style).
- Inside of each Column is another Component. `FrontendSideMenu` is the side menu you see on the left there. And `Markdown` is the Component that you are reading this on, which renders a markdown file (great for quickly writing long blocks of text) as a React Component. We will take a closer look at this Component in [the section on Redux](/stack/frontend-redux).
- Finally, the Component is exported. Each Component needs to be exported so that it can be used in the root page.

The hierarchy for Components in this project has many nested layers, but it looks something like this:


### State

State is the set of special variables in a Component. These are the key features of state variables:
- apply to the entirety of a Component
- force the Component to rerender automatically every time a state variable is updated
- can be passed down to child Components as "props", which can also update them and force Component to rerender

Rerender usually happens extremely fast, and only reloads the Component, not the entire page.

We could add some state to the Component above, like such:

```javascript
import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Markdown from '../Markdown';
import FrontendSideMenu from './FrontendSideMenu';

const Frontend = () => {
    const [bgColor, setBgColor] = useState('red');

    return (
        <Container style={{padding: '0', backgroundColor: `${bgColor}`}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <FrontendSideMenu onMouseEnter={() => setBgColor('blue')} onMouseLeave={() => setBgColor('red')}/>
                </Col>
                <Col style={{maxHeight: '100vh'}}>
                    <Markdown/>
                </Col>
            </Row>
        </Container>
    )
};

export default Frontend;
```

We added a state variable called bgColor, which controls the background color of the entire Container element. We can change bgColor by calling `setBgColor()` on some action in the Component. For this example, I chose to change it to blue when you hover over the menu, and back to red when the mouse leaves the menu area. This will rerender the page every time bgColor changes.