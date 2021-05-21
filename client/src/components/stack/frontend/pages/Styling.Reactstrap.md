### Reactstrap

React-Bootstrap, or Reactstrap, is a library of custom components for React that implement Bootstrap CSS designs. These components, when compiled, transform into elements with the Bootstrap classes that you may already be familiar with.

#### Installing Reactstrap

In order to use Reactstrap, you must install the module with:
`npm install react-bootstrap`

In order to use the `LinkContainer` component in your `NavBar`, you may also install the react router bootstrap module, using `npm install react-router-bootstrap`.

### Using ReactStrap Components

Reactstrap is utilized by using custom components(defined in the Reactstrap library), instead of the usual jsx components such as <div>, <form>, and <button>. Here is an example of using Reactstrap components for the menu that you see on the side:

```javascript
<Container style={{padding: '0'}}>
    <Accordion activeKey={!['react', 'redux', 'style'].includes(subSection) ? "react" : subSection}>
        <MenuSection eventKey={"react"} title="React" onClick={() => dispatch(setSubSection('react'))}>
            ...
        </MenuSection>
        <MenuSection eventKey={"redux"} title="Redux" onClick={() => dispatch(setSubSection('redux'))}>
            ...
        </MenuSection>
        <MenuSection eventKey={"style"} title="Style" onClick={() => dispatch(setSubSection('style'))}>
            ...
        </MenuSection>
    </Accordion>
</Container>
```

The whole menu is wrapped in a `Container`, which is essentially a glorified `div` (though it holds row and columns). The menu itself is an `Accordion` component, which controls the opening and closing action of the menu. The `MenuSection` component is actually my own custom component and not Reactstrap: but it is made up of the Reactstrap components below.

```javascript
<Card>
    <Accordion.Toggle onClick={() => onClick(eventKey)} as={Card.Header} eventKey={eventKey}>{title}</Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
        <Card.Body style={{padding: '0'}}>
            <ListGroup variant="flush">
                {children}
            </ListGroup>
        </Card.Body>
    </Accordion.Collapse>
</Card>
```

These are the `Accordion` controls, wrapped in a `Card` for styling purposes. Each card contains a `ListGroup`, full of `ListGroupItem`s that are responsible for the subsections in each menu.

The `ListGroupItem`s in each `MenuSection` are defined below:

```javascript
<ListGroup.Item
    action
    onClick={onClick}
>&nbsp;&nbsp;{children}</ListGroup.Item>
```

To learn more about ReactStrap, and see the full documentation for all the components it offers, you can check out [the official React Bootstrap documentation here](https://react-bootstrap.github.io/).