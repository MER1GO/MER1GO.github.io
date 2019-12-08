<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <link rel="stylesheet" type="text/css" href="blog.css"/>
<body style="font-family:Arial;font-size:12pt;">
<xsl:for-each select="blog/post">

  <section class="post">
    <h1 class="title"><xsl:value-of select="title"/></h1>
    <div class="meta">
      <p class="auth"><xsl:value-of select="author"/></p>
      <date class="date"><xsl:value-of select="date"/></date>
      <p class="tags"><xsl:for-each select="tag"><a href="#"><xsl:value-of select="text()"/></a><span>&#160;&#160;</span></xsl:for-each></p>
      <p class="topic">In <a href="#"><xsl:value-of select="topic"/></a></p>
    </div>
    <div class="main">
      <article><xsl:value-of select="content"/></article>
      <div class="comments">
        <xsl:for-each select="comms">
          <div class="meta_comm">
            <p class="author"><xsl:value-of select="comm_author"/></p>
            <p class="date"><xsl:value-of select="comm_date"/></p>
            <p class="reply_to">
              <xsl:if test="comm_reply_to">
              To <a href="" class="comm_reply_to"><xsl:value-of select="comm_reply_to"/></a>
            </xsl:if>
            </p>
          </div>
          <p class="comment"><xsl:value-of select="comm_text"/></p>
        </xsl:for-each>
      </div>
    </div>
  </section>

</xsl:for-each>
</body>
</html>