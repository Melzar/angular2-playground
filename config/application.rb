require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Angular2Learning
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Explicitly add the 'node_modules' directory
    config.assets.paths << Rails.root.join('node_modules')

    config.middleware.insert_before 0, 'Rack::Cors' do
      allow do origins '*'
      resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end

  end
end
