json.array! @articles do |article|
  json.id article.id
  json.name article.name
  json.content article.content
  json.created_at article.created_at
end
