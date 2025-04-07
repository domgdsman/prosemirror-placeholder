import { Plugin, PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

class PlaceholderState {
  constructor(readonly placeholder: string) {}
}

const placeholderKey = new PluginKey<PlaceholderState>("placeholder");

const LTR_EMBEDDING = "\u202A";

export function placeholder(text: string, forceLtr = false): Plugin {
  return new Plugin({
    key: placeholderKey,
    state: {
      init() {
        return new PlaceholderState(text);
      },
      apply(_tr, value) {
        return value;
      },
    },
    props: {
      decorations: (state) => {
        const doc = state.doc;
        if (
          doc.childCount === 1 &&
          doc.firstChild?.isTextblock &&
          doc.firstChild.content.size === 0
        ) {
          const placeholderState = placeholderKey.getState(state);
          if (!placeholderState) return null;
          return DecorationSet.create(doc, [
            Decoration.node(0, doc.firstChild.nodeSize, {
              class: "placeholder",
              "data-placeholder": forceLtr
                ? `${LTR_EMBEDDING}${placeholderState.placeholder}`
                : placeholderState.placeholder,
            }),
          ]);
        }
        return null;
      },
    },
  });
}
