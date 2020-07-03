import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

const header = (text: string, level: number) => {
  return `
    <div class="text-content--heading">
      <h${level} class="mdc-typography--headline${level}">${text}</h${level}>
    </div>`;
}

const paragraph = (text: string) => {
  if (text.startsWith("<img")) {
    return `
    <div class='full-width-content'>
      ${text}
    </div>`
  }

  return `
  <div class="text-content--body mdc-typography--body1">
    ${text}
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