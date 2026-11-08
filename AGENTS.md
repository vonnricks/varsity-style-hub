<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Catalog

- Keep product photos bundled in `src/assets` rather than CDN asset pointers: the user's browser has failed to load `/__l5e/assets-v1/` assets on the live site while bundled photos load reliably.
- When a style exists in both the site catalog (`src/lib/shop-data.ts`) and the Wix store, the Wix listing still drives price, sizes and checkout while the site's own photos are shown (`withSitePhotos` in `src/lib/use-products.ts`), because the store can't be edited from this project.
- Resolve local product-page IDs to matching Wix listings by name when available, so existing hero links and bookmarks become orderable without losing bundled photos.
- Save free-jacket size notes through Wix Cart V2's cart.note field after adding the paid jacket, preserving existing buyer notes so fulfillment receives the request.

