class TodoController < ApplicationController
require 'net/http'
require 'cgi'

def new
#save naar couchdb
server = CouchRest.new
@db = server.database!('todos')
@db.save_doc('entrydate' => params[:entrydate], 'duedate' => params[:duedate], 'prio' => params[:prio], 'desc' => params[:desc], 'status' => params[:status])

#save naar sqlite


end

end
