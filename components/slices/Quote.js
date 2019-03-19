import React from 'react';
import { RichText } from 'prismic-reactjs';

export default class Quote extends React.Component {
  render() {
    return (
      <div className="post-part single container">
        <blockquote className="block-quotation">
          {RichText.asText(this.props.slice.primary.quote)}
        </blockquote>
        <style jsx>{`
          .block-quotation {
            margin-bottom: 2rem;
            display: inline-block;
            font-style: italic;
            font-size: 24px;
          }
          .block-quotation:before { content: "« " }
          .block-quotation:after { content: " »" }
          .block-citation {
            display: inline-block;
            font-style: italic;
            border-left: solid #B4B4B4 4px;
            padding-left: 10px;
          }
          @media screen and (min-width: 920px) {
            .post-part.single .block-quotation ,  .blog-main.single .block-quotation {
              width: 130%;
              margin: 0 -15% 2rem -15%;
              font-size: 30px;
              padding: 0;
            }
          }
        `}</style>
      </div>
    );
  }
} 