import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
    static defaultProps = { section: [] };
    state = {
        currentSectionIndex: null,
      }
    
      handleSetActiveSection = (sectionIndex) => {
          this.setState({currentSectionIndex: sectionIndex})
      }

      renderItem(section,idx,currentSectionIndex) {
        return (
          <li className ="Accordion-item" key = {idx}>
              <button type = "button" onClick ={() => this.handleSetActiveSection(idx)}>
                  {section.title}
              </button>
              {(currentSectionIndex === idx) && <p>{section.content}</p>}
          </li>
        )
      }
      render() {
        return (
          <ul className = "Accordion">
                {sections.map((section,idx) => 
                this.renderItem(section, idx, currentSectionIndex)
                )}
          </ul>
        )
      }
    
    }
