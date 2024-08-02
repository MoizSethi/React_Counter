function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // // Set attributes
    // for (const [key, value] of Object.entries(reactElement.props)) {
    //     domElement.setAttribute(key, value);
    // }

    // // Set children
    // domElement.textContent = reactElement.children;

    // // Append to container
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Visit Google'
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
