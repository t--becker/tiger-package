'use babel';
import {CompositeDisposable, Emitter} from 'atom';
import actions from '../actions';
import stripper from '../utils/strip-string';

export default class TechWriterIDEView {

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tech-writer-ide');
    this.element.id = 'tech-writer-ide';

    //BUILD MARKDOWN TOOLBAR
    var markdownButtons = ['bold', 'italic', 'table', 'image', 'link' , 'list', 'list-ol', 'strikethrough', 'code'];
    this.buildToolbarGroup(markdownButtons);

    //BUILD NOTES, TIPS, INCLUDES TOOLBAR
    var atlasButtons = ['thumb-tack', 'thumbs-up', 'warning', 'external-link-square'];
    this.buildToolbarGroup(atlasButtons);

    //BUILD PANEL TOOLBAR
    var panelButtons = ['check-circle','trello', 'chrome'];
    this.buildToolbarGroup(panelButtons);


  }

  /**
 * Calls a function defined in this directory, if error it show a notification.
 */
 assignFunction(action) {
    const fn = actions[stripper(action)];
    const editor = atom.workspace.getActiveTextEditor();

    // Check if function and editor exists
    if (fn && editor) {
        // Calls action
        fn.call(this, editor);
    } else {
        // Show error notification
        atom.notifications.addError('Action does not exist', {
            dismissable: true
        });
    }
}

  /*
  Sets the on-active color for the clicked element.
  */
  changeIconColor(icon){
    switch(icon.style.color){
      case "" :
        icon.style.color = "red";
        break;

      case "red" :
        icon.style.color = "white";
        break;

      case "white" :
        icon.style.color = "red";
        break;

      default :
        icon.style.color = "white";
        break;
    }
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

  /*
    Builds a toolbar grouping.
    @icons is the arraylist of icons
    @id is the id of the grouping
  */
  buildToolbarGroup(icons){
    let ul = document.createElement('ul');
    ul.classList.add('button-group');

    for (let icon of icons) {
      let btn = document.createElement('li');
      btn.classList.add('fa', 'fa-'+icon);
      btn.id = icon;
      btn.onclick = ()=>{this.assignFunction(icon)};
      ul.appendChild(btn);
      }

    this.updateView(ul);
  }

}