import React from 'react';
import ReactDom from 'react-dom';
import faker from '@faker-js/faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>
            Warning
            Are you reading this?
          </h4>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Sam"
          timeAgo="Today at 4:45PM" 
          blogComment="I cannot believe you said that!" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>

    <ApprovalCard>
      <CommentDetail 
        author="Kevin"
        timeAgo="Today at 2:00AM"
        blogComment="I am neutral about everything."
        image={faker.image.avatar()}
      />
    </ApprovalCard>

      <CommentDetail 
        author="Nate"
        timeAgo="Yesterday at 5:00PM" 
        blogComment="It was a nice surprise!"
        image={faker.image.avatar()}
      />            
    </div> 
  );
};

ReactDom.render(<App />, document.querySelector('#root')) 