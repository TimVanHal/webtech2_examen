class TodoController < ApplicationController
require 'net/http'
require 'cgi'

def new
#save naar couchdb
server = CouchRest.new
@db = server.database!('todos')
@db.save_doc('entrydate' => params[:entrydate], 'enddate' => params[:enddate], 'prio' => params[:prio], 'desc' => params[:desc], 'status' => params[:status])

#save naar sqlite
@todo = Todo.new
@todo.entrydate = params[:entrydate]
@todo.enddate = params[:enddate]
@todo.prio = params[:prio]
@todo.desc = params[:desc]
@todo.status = params[:status]
@todo.save

redirect_to new_path
end

def filter
server = CouchRest.new
@db = server.database!('todos')
@result = @db.view('views/get_all_by_priority?key=' + '%22' + params[:prio]+ '%22')

return @result

end

end
