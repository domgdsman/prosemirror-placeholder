# prosemirror-placeholder

A minimal ProseMirror plugin to manage placeholder text in a ProseMirror editor.

## Installation

```bash
# Prerequisite: Ensure you have ProseMirror installed in your project.
npm install prosemirror-state prosemirror-view

# Install the prosemirror-placeholder package
npm install prosemirror-placeholder
```

## Usage

```javascript
import { EditorState } from "prosemirror-state";
import { placeholder } from "prosemirror-placeholder";

// Import styles for the placeholder
import "prosemirror-placeholder/style/placeholder.css";

const state = EditorState.create({
  // ...
  doc: undefined,
  plugins: [placeholder("Type something...")],
});
```

The placeholder text will be displayed when the editor is empty.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
