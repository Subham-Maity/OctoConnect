### How to use the Component
- Open `Your Data` folder and open `Components` folder and open Backtotop.json file.
- Change the values of the JSON file to your liking.
The JSON file should look something like this:

```json

{
  "disabled": false,
  "right": 16,
  "delay": 1200
}

```
or
    
```json

{
  "disabled": false,
  "left": 66,
  "delay": 6200
}
```
or
    
```json 

{
"disabled": true
}

```

## Component Settings

- **Description**: This component is a button that scrolls back to the top of the page when clicked. It also shows the scroll position as a percentage and fades out when not in use.
- **Props**: This component accepts the following props:

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Whether to disable the component or not | boolean | false |
| left | The distance from the left edge of the screen in pixels | number | undefined |
| right | The distance from the right edge of the screen in pixels | number | 4 |
| delay | The delay time in milliseconds before the button fades out or scrolls to the top | number | 1000 |

- **Usage**: To use this component, you need to import it from its file and render it in your JSX. You can pass any of the props as attributes. You can also use a JSON file to store your props data and pass it to the component. For example:

## Right Side
``page.tsx``
```jsx
import backToTopData from "../../Your Data/Components/Backtotop.json";
import Backtotop from "@/app/(site)/components/Backtotop";

const backToTopProps = backToTopData[0];

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Backtotop disabled={backToTopProps.disabled} right={backToTopProps.right} delay={backToTopProps.delay} />
            </div>
        </div>
    );
}
```
For this example, the JSON file should look something like this:

``Backtotop.json``
```json
[
  {
    "disabled": false,
    "right": 16,
    "delay": 1200
  }
]
```

## Left Side
``page.tsx``
```jsx
import backToTopData from "../../Your Data/Components/Backtotop.json";
import Backtotop from "@/app/(site)/components/Backtotop";

const backToTopProps = backToTopData[0];

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Backtotop disabled={backToTopProps.disabled} left={backToTopProps.left} delay={backToTopProps.delay} />
            </div>
        </div>
    );
}
```
For this example, the JSON file should look something like this:

``Backtotop.json``
```json
[
  {
    "disabled": false,
    "left": 16,
    "delay": 1200
  }
]
```
