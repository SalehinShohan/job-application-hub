import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="text-white container lg:ml-60 lg:mt-24 mb-10">
        <h2 className=" mt-12 text-4xl font-bold">
          When should you use context API ?
        </h2>
        <p className=" mt-4 text-xl">
          <span className="font-bold">Context API: </span>
          Context API is a feature in React that allows data to be passed down
          through the component tree without having to pass props down manually
          at every level. It is useful when you have data or functionality that
          needs to be accessed by many components in your application.
        </p>
        <h2 className=" mt-12 text-4xl font-bold">What is custom hook ?</h2>
        <p className=" mt-4 text-xl">
          <span className="font-bold">Custom Hook: </span>A custom hook in React
          is a JavaScript function that allows you to reuse stateful logic
          across multiple components. Custom hooks enable you to extract and
          share logic that is typically duplicated across components into a
          reusable hook. Custom hooks follow the naming convention of starting
          with the prefix "use", and they can use any of the existing React
          hooks within them, such as useState or useEffect. Custom hooks can
          also use other custom hooks, allowing you to build complex
          functionality in a modular and reusable way.
        </p>
        <h2 className=" mt-12 text-4xl font-bold">What is useRef ?</h2>
        <p className=" mt-4 text-xl">
          <span className="font-bold">useRef: </span>
          useRef is a built-in hook in React that returns a mutable ref object
          that can be used to hold a reference to a DOM node or a value that
          persists across renders. useRef is commonly used to access or modify
          the properties of a DOM node, such as the value of an input field or
          the dimensions of an element. Unlike state or props, changing the
          value of a useRef object does not trigger a re-render of the
          component. This makes useRef useful for managing state that does not
          affect the UI, such as keeping track of a previous value or storing a
          timer ID.
        </p>
        <h2 className="mt-12 text-4xl font-bold">What is useMemo ?</h2>
        <p className="mt-4 text-xl">
          <span className="font-bold">React works: </span>
          useMemo is a built-in hook in React that allows you to optimize the
          performance of your components by memoizing the results of a function
          call. useMemo takes two arguments: a function that returns a value,
          and an array of dependencies that trigger the function to re-run when
          they change. The purpose of useMemo is to avoid unnecessary
          re-computations of a value in a component's render method. By
          memoizing a value, you can ensure that it is only re-computed when the
          dependencies change, instead of on every render.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
