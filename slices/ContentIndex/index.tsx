import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";
/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({
  slice,
}: ContentIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_posts");
  const projects = await client.getAllByType("project");

  const contentIype = slice.primary.content_type || "Blog";

  const items = slice.primary.content_type === "Blog" ? blogPosts : projects;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div className="md:py-10">
        <Heading size="xl" className="mb-8">
          {slice.primary.heading}
        </Heading>
        {isFilled.richText(slice.primary.description) && (
          <div className="mb-10 propse prose-invert prose-xl">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}

        <ContentList
          items={items}
          contentType={contentIype}
          viewMoreText={slice.primary.view_more_text}
          fallbackItemImage={slice.primary.fallback_item_image}
        />
      </div>
    </Bounded>
  );
};

export default ContentIndex;
