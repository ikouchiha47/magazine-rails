json.event @event, :name, :starts_at, :ends_at, :description
json.comments @event.comments, :content, :created_at
