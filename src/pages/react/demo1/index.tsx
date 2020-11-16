import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default () => {
  return (
    <div>
      <Welcome name="xiaomimg"/>
      <Welcome name="xiaohong"/>
    </div>
  );
};
