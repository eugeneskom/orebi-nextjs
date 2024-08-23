'use client';

import React, { useState } from 'react';

interface ProductTabsProps {
  description: string;
  title: string;
}

export default function ProductTabs({ description,title }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('tab-2');

  return (
    <div className="tabs">
      <div className="tabs__nav d-flex">
        <button 
          className={`tabs__link ${activeTab === 'tab-1' ? 'is-active' : ''}`} 
          onClick={() => setActiveTab('tab-1')}
          type='button'
        >
          Description
        </button>
        <button 
          className={`tabs__link ${activeTab === 'tab-2' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('tab-2')}
          type='button'
        >
          Reviews(1)
        </button>
      </div>
      <div className="tabs__content">
        <div className={`tab tab-1 ${activeTab === 'tab-1' ? 'is-active' : ''}`}>
          <p className="tab__caption">{title}</p>
          <div className="tab__description">
            <p>{description}</p>
          </div>
        </div>
        <div className={`tab tab-2 ${activeTab === 'tab-2' ? 'is-active' : ''}`}>
          <p className="tab__caption">1 review for Product</p>
          <div className="comments">
            <div className="comments__top d-flex ai-c">
              <p className="comments__name">John Ford</p>
              <div className="comments__rate" />
              <div className="comments__date">
                <p>6 months ago</p>
              </div>
            </div>
            <div className="tab__description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            </div>
          </div>
          <form className="form">
            <p className="form__caption">Add a Review</p>
            <label className="form__label">
              Name
              <input className="form__input form__input--medium" type="text" placeholder="Your name here" />
            </label>
            <label className="form__label">
              Email
              <input className="form__input form__input--medium" type="email" placeholder="Your email here" />
            </label>
            <label className="form__label">
              Review
              <textarea className="form__textarea form__textarea--medium" placeholder="Your review here" />
            </label>
            <button className="btn btn--big" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}