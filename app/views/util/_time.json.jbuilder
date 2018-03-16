# formatted_time  = timestamp.strftime("%b %-d, %Y, %-l:%M %p")
formatted_time  = timestamp.to_f * 1000
json.timestamp formatted_time
