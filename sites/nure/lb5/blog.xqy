$blog = doc("blog.xml")blog/

for $x in $blog/post
where contains(fn:lower-case($x/author), fn:lower-case("O`conor"))
order by $x/author
return $x

for $x in $blog/post
where $x/date = format-date(xs:date("1999-10-17"), "[D01].[M01].[Y0001]")
order by $x/date
return $x

for $x in $blog/post
where $x/date = "17.10.1999"
order by $x/date
return $x

for $x in $blog/post
where contains(fn:lower-case($x/topic), fn:lower-case("Food"))
order by $x/topic
return $x

for $x in $blog/post
where contains(fn:lower-case($x/topic), fn:lower-case("Food"))
order by $x/topic
return $x

for $x in $blog/post
  for $y in $x/tag
  where contains(fn:lower-case($y), fn:lower-case("maserati"))
  order by $x/author
  return $x

for $x in $blog/post
where count($x/comms)>=2
return $x

declare namespace functx = "http://www.functx.com";
declare function functx:word-count
  ( $arg as xs:string? )  as xs:integer {

   count(tokenize($arg, '\W+')[. != ''])
 } ;
for $x in blog/post
where functx:word-count($x/content)>1000
return $x

for $x in blog/post
where date(string-join(reverse(tokenize($x/date,"[.]")),"-")) < date("1801-01-01")
order by $/author
return $x 