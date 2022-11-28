import React from "react";

const Blogs = (props) => {
  return (
    <section className="text-gray-400">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl text-black font-bold leading-none text-center sm:text-5xl">
          Interview Asked Questions
        </h2>
        <div className="flex flex-col text-left divide-y sm:px-8 lg:px-12 xl:px-32 ">
          <details>
            <summary className="py-2 hover:bg-green-500 hover:text-white text-gray-600 outline-none cursor-pointer focus:text-black">
              React vs. Angular vs. Vue?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                <strong>React</strong>
                <br />
                Many front-end applications rely on global state management to
                store information, such as who is logged in and other user
                settings. <br />
                The most popular project for JavaScript state management is
                Redux. Most developers use the official React bindings for
                Redux, which are maintained by the Redux team. <br />
                Because of React’s popularity, finding input components and
                ready-to-use elements is extremely easy. They’re all just a
                Google or GitHub search away. <br />
                The React ecosystem also includes React Native that allows you
                to build native iOS and Android applications from a single
                codebase written in React. So, React can be a great choice for
                building mobile applications using web technologies, too. <br />
                React is part of the MERN stack, which contains MongoDB,
                ExpressJS, React, and NodeJS. The great thing about this
                combination is that a single language — JavaScript — powers the
                whole application. <br />
                <br />
                <strong>Angular</strong> <br />
                For state management in Angular, you can use the NgRx project.
                It has been inspired by Redux, but it’s specifically created for
                Angular. <br /> As in the case of Vue and React, there are many
                ready-to-use components that you can import into your projects.
                What’s slightly different about Angular is that there are many
                official components in the Angular Material project. This is an
                official project by Google that offers Material Design
                components for Angular applications. <br />
                You can build cross-platform mobile applications in Angular
                using NativeScript. It supports Vue as well, but the Angular
                support is more mature. <br /> Angular is part of the well-known
                MEAN stack that combines Angular with MongoDB, ExpressJS, and
                NodeJS. Similar to the MERN stack, it relies entirely on
                JavaScript for both the front-end and back-end. <br />
                <br />
                <strong>Vue</strong> <br />
                Even though Redux can be used in Vue, there are no official
                bindings. But that should not worry you because Vuex is the
                official state management library made specifically for Vue
                applications. Aside from integrating very well with Vue, it’s
                easy to debug using Vue’s developer tools. <br /> In the early
                days of Vue, it was harder to find ready-to-use components.
                Since the community has grown, there’s a wide range of input
                components and advanced elements that you can use to speed up
                your development. <br /> For mobile app development, there’s an
                up and coming project called Weex. Weex is developed and used by
                Alibaba, but it’s not as mature and powerful as React Native.
                What’s more, since the project is developed and used more in
                China, it’s harder to find documentation and solutions to issues
                in English. <br /> Vue integrates well with Laravel, and that’s
                why they are often used together. Laravel offers complete
                JavaScript and CSS scaffolding to enable the use of Vue in new
                projects.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 hover:bg-green-500 hover:text-white text-gray-600 outline-none cursor-pointer focus:text-black">
              How does prototypical inheritance work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                JavaScript is a bit confusing for developers experienced in
                class-based languages (like Java or C++), as it is dynamic and
                does not have static types. <br />
                <br />
                When it comes to inheritance, JavaScript only has one construct:
                objects. Each object has a private property which holds a link
                to another object called its prototype. That prototype object
                has a prototype of its own, and so on until an object is reached
                with null as its prototype. By definition, null has no
                prototype, and acts as the final link in this prototype chain.
                It is possible to mutate any member of the prototype chain or
                even swap out the prototype at runtime, so concepts like static
                dispatching do not exist in JavaScript. <br /> <br />
                While this confusion is often considered to be one of
                JavaScript's weaknesses, the prototypical inheritance model
                itself is, in fact, more powerful than the classic model. It is,
                for example, fairly trivial to build a classic model on top of a
                prototypical model — which is how classes are implemented.{" "}
                <br /> <br />
                Although classes are now widely adopted and have become a new
                paradigm in JavaScript, classes do not bring a new inheritance
                pattern. While classes abstract most of the prototypical
                mechanism away, understanding how prototypes work under the hood
                is still useful.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 hover:bg-green-500 hover:text-white text-gray-600 outline-none cursor-pointer focus:text-black">
              What is a unit test? Why should we write unit tests?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Unit testing is a software development process in which the
                smallest testable parts of an application, called units, are
                individually and independently scrutinized for proper operation.
                This testing methodology is done during the development process
                by the software developers and sometimes QA staff. The main
                objective of unit testing is to isolate written code to test and
                determine if it works as intended. <br />
                <br />
                <strong>How unit tests work</strong> <br />
                <br /> A unit test typically comprises of three stages: plan,
                cases and scripting and the unit test itself. In the first step,
                the unit test is prepared and reviewed. The next step is for the
                test cases and scripts to be made, then the code is tested.{" "}
                <br />
                <br />
                Test-driven development requires that developers first write
                failing unit tests. Then they write code and refactor the
                application until the test passes. TDD typically results in an
                explicit and predictable code base <br />
                <br />
                Each test case is tested independently in an isolated
                environment, as to ensure a lack of dependencies in the code.
                The software developer should code criteria to verify each test
                case, and a testing framework can be used to report any failed
                tests. Developers should not make a test for every line of code,
                as this may take up too much time. Developers should then create
                tests focusing on code which could affect the behavior of the
                software being developed. <br />
                <br />
                Unit testing involves only those characteristics that are vital
                to the performance of the unit under test. This encourages
                developers to modify the source code without immediate concerns
                about how such changes might affect the functioning of other
                units or the program as a whole. Once all of the units in a
                program have been found to be working in the most efficient and
                error-free manner possible, larger components of the program can
                be evaluated by means of integration testing. Unit tests should
                be performed frequently, and can be done manually or can be
                automated.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 hover:bg-green-500 hover:text-white text-gray-600 outline-none cursor-pointer focus:text-black">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <div className="px-4 pb-4">
              <p className="mt-1 dark:text-gray-400">
                When we talk about state in our applications, it’s important to
                be clear about what types of state actually matter. <br />
                There are four main types of state you need to properly manage
                in your React apps: <br />
                1. Local state <br />
                <br />
                2. Global state <br />
                <br />
                3. Server state <br />
                <br />
                4. URL state <br />
                <br />
                <strong>Local (UI) state</strong> : Local state is data we
                manage in one or another component. Local state is most often
                managed in React using the useState hook. For example, local
                state would be needed to show or hide a modal component or to
                track values for a form component, such as form submission, when
                the form is disabled and the values of a form’s inputs. <br />
                <strong>Global (UI) state</strong> : Global state is data we
                manage across multiple components. Global state is necessary
                when we want to get and update data anywhere in our app, or in
                multiple components at least. A common example of global state
                is authenticated user state. If a user is logged into our app,
                it is necessary to get and change their data throughout our
                application. <br />
                <strong> Server state</strong> : Data that comes from an
                external server that must be integrated with our UI state.
                Server state is a simple concept, but can be hard to manage
                alongside all of our local and global UI state. There are
                several pieces of state that must be managed every time you
                fetch or update data from an external server, including loading
                and error state <br />
                <strong>URL state</strong> : Data that exists on our URLs,
                including the pathname and query parameters. URL state is often
                missing as a category of state, but it is an important one. In
                many cases, a lot of major parts of our application rely upon
                accessing URL state. Try to imagine building a blog without
                being able to fetch a post based off of its slug or id that is
                located in the URL! There are undoubtedly more pieces of state
                that we could identify, but these are the major categories worth
                focusing on for most applications you build.{" "}
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
