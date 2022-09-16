The ButtonShim components accept v8 `IButtonProps` and render v9 button components.

Shims are useful when you have a large number of usage instances, want to render v9 components, and do not have time or resources to update every instance.

Prefer to migrate your code to use v9 buttons directly rather than take use shims.
Shims depend on both v8 and v9 so may prevent bundle size optimizations.

<!-- Don't allow prettier to collapse code block into single line -->
<!-- prettier-ignore -->
> ** Usage:**
>
> ```jsx
>
> import { DefaultButtonShim } from'@fluentui/button-shim-v8-v9';
>
> ```
>
