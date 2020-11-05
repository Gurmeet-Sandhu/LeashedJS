import React from 'react';
import TopPart from '../comps/TopPart';
import ResourceSub from '../comps/ResourceSub';

export default function Resources() {
    return (
      <div className="ResourceContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Resources"
          />
        </div>
        <div className="ResourceSection">
          <ResourceSub 
            text=""
          />
          <ResourceSub 
          
          />
          <ResourceSub 
          
          />
          <ResourceSub 
          
          />
          <ResourceSub 
          
          />
        </div>
      </div>
    )
  }