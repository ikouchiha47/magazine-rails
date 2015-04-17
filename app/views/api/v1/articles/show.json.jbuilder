json.article do
  json.name @article.name
  json.content @article.content
  json.comments @article.comments, :content, :created_at
end
