import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { stringify } from '@angular/compiler/src/util';

const getModifiers = (text:string) => {
  return text.match(/%[^%]+%/g);
}

const getClasses = (text:string) => {
  const modifiers = getModifiers(text);
  let parent_classes = "";
  let child_classes = "";
  let replace_child = false;

  if(modifiers){
    modifiers.forEach(raw_modifier => {
      let modifier = raw_modifier.replace(/%/g, '');
      switch(modifier) {
        case "no-bottom-margin":
          parent_classes = parent_classes + " " + modifier;
          break;
        case 'headline1':
          child_classes = child_classes + " mdc-typography--headline1";
          replace_child = true;
          break;
        case 'headline2':
          child_classes = child_classes + " mdc-typography--headline2";
          replace_child = true;
          break;
        case 'headline3':
          child_classes = child_classes + " mdc-typography--headline3";
          replace_child = true;
          break;
        case 'headline4':
          child_classes = child_classes + " mdc-typography--headline4";
          replace_child = true;
          break;
        case 'headline5':
          child_classes = child_classes + " mdc-typography--headline5";
          replace_child = true;
          break;
        case 'headline6':
          child_classes = child_classes + " mdc-typography--headline6";
          replace_child = true;
          break;
        case 'subtitle1':
          child_classes = child_classes + " mdc-typography--subtitle1";
          replace_child = true;
          break;
        case 'subtitle2':
          child_classes = child_classes + " mdc-typography--subtitle2";
          replace_child = true;
          break;
        case 'body1':
          child_classes = child_classes + " mdc-typography--body1";
          replace_child = true;
          break;
        case 'body1':
          child_classes = child_classes + " mdc-typography--body2";
          replace_child = true;
          break;
        case 'light':
          child_classes = child_classes + " light";
          break;
        case 'regular':
          child_classes = child_classes + " regular";
          break;
        case 'medium':
          child_classes = child_classes + " medium";
        case 'bold':
          child_classes = child_classes + " bold";
        default:
          break;
      }
    });
  }

  parent_classes = parent_classes.trim();
  child_classes = child_classes.trim();

  return {
    parent_classes,
    child_classes,
    replace_child
  }
}

const cleanString = (text:string) => {
  return text.replace(/%[^%]+%/g, '').trim()
}

const header = (text: string, level: number) => {

  let { parent_classes, child_classes, replace_child } = getClasses(text);
  const headerText = cleanString(text);

  parent_classes = "text-content--heading " + parent_classes;
  if(!replace_child) {
    child_classes = `mdc-typography--headline${level} ` + child_classes;
  }

  parent_classes = parent_classes.trim();
  child_classes = child_classes.trim();

  return `
    <div class="${parent_classes}">
      <h${level} class="${child_classes}">${headerText}</h${level}>
    </div>`;
}

const paragraph = (text: string) => {
  if (text.startsWith("<img")) {
    return `
    <div class='full-width-content'>
      ${text}
      <div class='small-spacer'></div>
    </div>`
  }

  let { parent_classes, child_classes, replace_child } = getClasses(text);
  const p_text = cleanString(text);

  parent_classes = "text-content--body " + parent_classes;
  if(!replace_child) {
    child_classes = `mdc-typography--body1 ` + child_classes;
  }

  parent_classes = parent_classes.trim();
  child_classes = child_classes.trim();

  return `
  <div class="${parent_classes} ${child_classes}">
    ${p_text}
  </div>`;
}

const list = (body:string, ordered:boolean, start:number) => {
  const type = ordered ? 'ol' : 'ul',
    startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  var out = '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  return `
  <div class="text-content--body mdc-typography--body1">
    ${out}
  </div>`;
}


export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = header;
  renderer.paragraph = paragraph;
  renderer.list = list;

  return {
    renderer: renderer,
  };
}