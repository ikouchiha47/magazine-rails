json.articles @articles do |article|
  json.name article.name
  json.content article.content
  json.created_at article.created_at
end
