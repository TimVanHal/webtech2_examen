Rails.application.routes.draw do

  get 'todo/new' => 'todo#new'
  get 'todo/filter' => 'todo#filter'
  
end
