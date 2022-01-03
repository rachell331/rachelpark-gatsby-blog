import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import Seo from '../components/seo';
import PostHeader from '../components/post-header';
import PostNavigator from '../components/post-navigator';
import Post from '../models/post';
import PostContent from '../components/post-content';
import Utterances from '../components/utterances';
import PageFooter from '../components/page-footer';
import ThemeSwitch from '../components/theme-switch';
import './style.scss';

function BlogTemplate({ data }) {
  const [viewCount, setViewCount] = useState(null);

  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { siteUrl, comments, title, author } = data.site?.siteMetadata;
  const utterancesRepo = comments?.utterances?.repo;

  useEffect(() => {
    if (!siteUrl) return;
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, '');
    const key = curPost.slug.replace(/\//g, '');

    fetch(
      `https://api.countapi.xyz/${
        process.env.NODE_ENV === 'development' ? 'get' : 'hit'
      }/${namespace}/${key}`,
    ).then(async (result) => {
      const data = await result.json();
      setViewCount(data.value);
    });
  }, [siteUrl, curPost.slug]);

  return (
    <div className='page-wrapper'>
      <PageHeader siteTitle={title || `Title`}/>  
      <Seo title={curPost?.title} description={curPost?.excerpt} />
      <PostHeader post={curPost} viewCount={viewCount} />
      <PostContent html={curPost.html} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      {utterancesRepo && <Utterances repo={utterancesRepo} path={curPost.slug} />}
      <PageFooter
        author={author.name || `Author`}
        githubUrl={author.social?.github || `https://www.github.com`}/>
      <ThemeSwitch />
    </div>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        title
          author {
            name
            social {
              github
            }
          }
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;
