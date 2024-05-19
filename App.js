/**
 * 
 * 
 * <div id="parent">
 *      <div id=child>
*           <h1></h1>
        </div>
 * </div>
 * 
 * 
 * ReactElement(Object) = HTML(Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "I'm h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: 1 }, "I'm h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement("h1", { id: "test" }, "Hello world");

console.log("heding", parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// render object to dom as h1 tag
root.render(parent);
