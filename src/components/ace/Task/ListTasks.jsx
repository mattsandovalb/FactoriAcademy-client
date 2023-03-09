import React from 'react';

const ListTasks = (props) => {
  const { title, instruction, statement, documentation1, documentation2 } = props;

  return (
    <div>
      <div>
        <div>
          <h5>{title}</h5>
          <p>{instruction}</p>
          <h5>{statement}</h5>
          <h5>{documentation1}</h5>
          <h5>{documentation2}</h5>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ListTasks;
