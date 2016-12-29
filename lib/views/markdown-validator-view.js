'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkDownValidatorView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'markdown-error-panel';
    this.element.classList.add('markdown-error-panel');

    //creates the panel title
    title = document.createElement('title');
    title.id ="markdown-error-panel-title";
    this.element.appendChild(title);
    //creates the close button
    closeButton = document.createElement('span');
    closeButton.classList.add('icon', 'icon-x');
    closeButton.classList.add('markdown-panel-closer');
    closeButton.id = 'closeOpenPanelValidator';
    closeButton.onclick = function(){controller.openMarkdownPanel()};
    this.element.appendChild(closeButton);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  updateView(content){
    this.element.appendChild(content);
  }

  setTitle(title){
    document.getElementById('markdown-error-panel-title').textContent = title;
  }


  clearView()
  {
    let divTop = document.getElementById('markdown-error-panel');
    let span = document.getElementById('markdown-error-panel-span');
    if(span!=null&&divTop!=null)
    {
      divTop.removeChild(span);
    }

  }



}